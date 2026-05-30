/** Trechos Java formatados do PDF N2 + parser de enunciados com código. */
const CODE_SNIPPETS = {
  bresenham: `public void rasterizarRetaBresenham(int x0, int y0, int x1, int y1) {
  int dx = x1 - x0;
  int dy = y1 - y0;
  int yi = 1;
  if (dy < 0) {
    yi = -1;
    dy = -dy;
  }
  // [LACUNA 1] - Inicialização da variável de decisão do erro
  int erro = 2 * dy - dx;
  int y = y0;
  for (int x = x0; x <= x1; x++) {
    desenharPixel(x, y); // Método que acende o pixel na tela
    // [LACUNA 2] - Avaliação do desvio e atualização das coordenadas
    if (erro > 0) {
      y = y + yi;
      erro = erro + 2 * (dy - dx);
    } else {
      erro = erro + 2 * dy;
    }
  }
}`,

  translacao: `package Transformacoes;
import javax.swing.*;
import java.awt.*;

public class TranslacaoExemplo extends JPanel {
  // Coordenadas do objeto original
  private int x = 50;
  private int y = 50;
  // Valores de translação
  private int dx = 100;
  private int dy = 80;

  @Override
  protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    // Cor do objeto original
    g.setColor(Color.BLUE);
    g.drawRect(x, y, 80, 50);
    g.drawString("Original", x, y - 10);
    // Aplicando translação
    int xNovo = x + dx;
    int yNovo = y + dy;
    // Cor do objeto transladado
    g.setColor(Color.RED);
    g.drawRect(xNovo, yNovo, 80, 50);
    g.drawString("Transladado", xNovo, yNovo - 10);
    // Vetor de deslocamento (visual)
    g.setColor(Color.BLACK);
    g.drawLine(x + 40, y + 25, xNovo + 40, yNovo + 25);
  }
}`,

  translacaoLacunas: `package Transformacoes;
import javax.swing.*;
import java.awt.*;

public class TranslacaoExemplo extends JPanel {
  private int x = 50;
  private int y = 50;
  private int dx = 100;
  private int dy = 80;

  @Override
  protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.setColor(Color.BLUE);
    g.drawRect(x, y, 80, 50);
    g.drawString("Original", x, y - 10);
    // Aplicando translação
    int xNovo = [LACUNA A];
    int yNovo = [LACUNA B];
    [LACUNA C];
    g.drawRect(xNovo, yNovo, 80, 50);
    g.drawString("Transladado", xNovo, yNovo - 10);
    g.setColor(Color.BLACK);
    g.drawLine(x + 40, y + 25, xNovo + 40, yNovo + 25);
  }
}`,

  rotacao: `package Transformacoes;
import javax.swing.*;
import java.awt.*;

public class RotacaoExemplo extends JPanel {
  private int x = 150;
  private int y = 100;

  @Override
  protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.setColor(Color.BLUE);
    g.drawRect(x, y, 80, 50);
    g.drawString("Original", x, y - 10);
    // Definir ângulo de rotação
    double angulo = Math.toRadians(45);
    int xNovo = (int)(x * Math.cos(angulo) - y * Math.sin(angulo));
    int yNovo = (int)(x * Math.sin(angulo) + y * Math.cos(angulo));
    g.setColor(Color.RED);
    g.drawRect(xNovo, yNovo, 80, 50);
    g.drawString("Rotacionado", xNovo, yNovo - 10);
    g.setColor(Color.BLACK);
    g.drawLine(x, y, xNovo, yNovo);
  }
}`,

  rotacaoLacunas: `package Transformacoes;
import javax.swing.*;
import java.awt.*;

public class RotacaoExemplo extends JPanel {
  private int x = 150;
  private int y = 100;

  @Override
  protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.setColor(Color.BLUE);
    g.drawRect(x, y, 80, 50);
    g.drawString("Original", x, y - 10);
    double angulo = Math.toRadians(45);
    int xNovo = (int)(x * Math.[LACUNA A](angulo) - y * Math.[LACUNA B](angulo));
    int yNovo = (int)(x * Math.sin(angulo) + y * Math.cos(angulo));
    [LACUNA C];
    g.drawRect(xNovo, yNovo, 80, 50);
    g.drawString("Rotacionado", xNovo, yNovo - 10);
    g.setColor(Color.BLACK);
    g.drawLine(x, y, xNovo, yNovo);
  }
}`,
};

/** Alterações citadas no enunciado (destacadas após o código original). */
const CODE_CHANGE_BLOCKS = {
  'N2-49': {
    title: 'Modificação proposta pelo programador',
    code: `int xNovo = x;
int yNovo = y;`,
  },
  'N2-53': {
    title: 'Linha alterada (sinal invertido)',
    code: `int xNovo = (int)(x * Math.cos(angulo) + y * Math.sin(angulo));`,
  },
};

const CODE_START_RE = /\b(package\s+\w|public\s+void\s+rasterizar|public\s+class\s+\w)/;
const OUTRO_START_RE = /\b(A respeito|Considerando|Com base|Analisando|Julgue|Relacione|Imagine que|Imagine|No desenvolvimento de interfaces|No desenvolvimento de sistemas|Embora o código|A ordem dos sinais|A correta rasterização|assinale a opção)/i;

function snippetKeyForQuestion(id) {
  const n = parseInt(id.split('-')[1], 10);
  if (n >= 43 && n <= 46) return 'bresenham';
  if (n >= 47 && n <= 49) return 'translacao';
  if (n === 50) return 'translacaoLacunas';
  if (n >= 51 && n <= 53) return 'rotacao';
  if (n === 54) return 'rotacaoLacunas';
  return null;
}

function formatCollapsedJava(text) {
  let s = text.trim();
  if (s.includes('\n') && s.split('\n').filter(Boolean).length > 4) return s;

  s = s
    .replace(/\s*\/\/\s*/g, '\n// ')
    .replace(/\s*(package\s+\S+;)/g, '\n$1')
    .replace(/\s*(import\s+[^;]+;)/g, '\n$1')
    .replace(/\s*(public class\s+)/g, '\n$1')
    .replace(/\s*(public void\s+\w+\([^)]*\)\s*\{)/g, '\n$1')
    .replace(/\s*(@Override)\s*/g, '\n$1\n')
    .replace(/\s*(protected void|public void|private void)\s+/g, '\n$1 ')
    .replace(/\s*(private int|public int|int)\s+/g, '\n  $1 ')
    .replace(/\s*(double angulo)\s=/g, '\n  $1 =')
    .replace(/\s*(super\.\w+\([^)]*\);)/g, '\n    $1')
    .replace(/\s*(g\.\w+\([^)]*\);)/g, '\n    $1')
    .replace(/\s*(if\s*\([^)]+\)\s*\{)/g, '\n    $1')
    .replace(/\s*(for\s*\([^)]+\)\s*\{)/g, '\n    $1')
    .replace(/\s*(else\s*\{)/g, '\n    $1')
    .replace(/\s*(\})\s*/g, '\n}\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return s;
}

function splitTextAroundCode(text) {
  const m = text.match(CODE_START_RE);
  if (!m) return { intro: text.trim(), code: null, outro: null };

  const intro = text.slice(0, m.index).trim();
  const rest = text.slice(m.index);
  const om = rest.match(OUTRO_START_RE);
  if (!om || om.index <= 0) {
    return { intro: text.trim(), code: null, outro: null };
  }

  const codeRaw = rest.slice(0, om.index).trim();
  const outro = rest.slice(om.index).trim();
  return { intro, code: formatCollapsedJava(codeRaw), outro };
}

function extractIntroOutro(fullText) {
  const m = fullText.match(CODE_START_RE);
  if (!m) return { intro: fullText.trim(), outro: '' };

  const intro = fullText.slice(0, m.index).trim();
  const afterCodeStart = fullText.slice(m.index);
  const om = afterCodeStart.match(OUTRO_START_RE);
  const outro = om ? afterCodeStart.slice(om.index).trim() : '';
  return { intro, outro };
}

function resolveCodeQuestionDisplay(q) {
  const key = snippetKeyForQuestion(q.id);
  if (!key) return null;

  const { intro, outro } = extractIntroOutro(q.text);
  const change = CODE_CHANGE_BLOCKS[q.id];
  const labels = {
    bresenham: 'Java · Algoritmo de Bresenham',
    translacao: 'Java · TranslacaoExemplo',
    translacaoLacunas: 'Java · TranslacaoExemplo (lacunas)',
    rotacao: 'Java · RotacaoExemplo',
    rotacaoLacunas: 'Java · RotacaoExemplo (lacunas)',
  };

  return {
    intro,
    code: CODE_SNIPPETS[key],
    codeLabel: labels[key],
    change,
    outro: outro || (intro ? '' : q.text),
  };
}

function escapeHtmlCode(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightJava(code) {
  const escaped = escapeHtmlCode(code);
  return escaped
    .replace(/(\/\/[^\n]*)/g, '<span class="tok-comment">$1</span>')
    .replace(/\b(LACUNA\s+[ABC]|\[LACUNA\s+[ABC]\])/g, '<span class="tok-lacuna">$1</span>')
    .replace(/\b(package|import|public|private|protected|class|void|int|double|if|else|for|return|new|extends|Override)\b/g, '<span class="tok-keyword">$1</span>')
    .replace(/\b(Math\.\w+|Color\.\w+|Graphics|JPanel|javax\.swing|java\.awt)\b/g, '<span class="tok-type">$1</span>')
    .replace(/("(?:\\.|[^"\\])*")/g, '<span class="tok-string">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="tok-number">$1</span>');
}

function buildCodePanelHtml(parts) {
  if (!parts?.code) return '';

  let html = `<div class="code-panel">
    <div class="code-panel__header">
      <span class="code-panel__dot"></span>
      <span class="code-panel__title">${escapeHtmlCode(parts.codeLabel || 'Código Java')}</span>
    </div>
    <pre class="question-code"><code>${highlightJava(parts.code)}</code></pre>`;

  if (parts.change) {
    html += `<div class="code-change">
      <p class="code-change__title">${escapeHtmlCode(parts.change.title)}</p>
      <pre class="question-code question-code--change"><code>${highlightJava(parts.change.code)}</code></pre>
    </div>`;
  }

  html += '</div>';
  return html;
}

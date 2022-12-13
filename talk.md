---
marp: true
theme: default
class: invert
backgroundColor: #282a36
---

<style >
{
  font-family: 'Fira Code' !important;
}
</style>

![bg height:9in](assets/../asets/codao.webp)
# O que é <span style="color:#50fa7b">Node</span>
* Plataforma
  * v8
  * Acesso a hardware (hd, rede, ...)
* Javascript
  * Linguagem
  * ECMA
* Alternativa
  * Deno

---

![bg height:9in](assets/../asets/codao.webp)

# Tipos

* <span style="color:#50fa7b">number</span>
* <span style="color:#50fa7b">string</span>
* <span style="color:#50fa7b">boolean</span>
* <span style="color:#50fa7b">object</span>
  * Sim, arrays são <span style="color:#50fa7b">objects</span>
* <span style="color:#50fa7b">function</span>
* <span style="color:#ffb86c">undefined</span>
* <span style="color:#ffb86c">null</span>
* <span style="color:#ffb86c">NaN</span>

---

![bg height:9in](assets/../asets/codito.webp)
<style>
.columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  font-family: 'Fira Code' !important;
}
</style>


# Variáveis
<div class="columns">
<div>

## <span style="color:#ff5555">Var</span>
![](asets/var.png)
</div>

<div>

## <span style="color:#ffb86c">Let</span>
![](asets/let.png)
</div>
<div>

## <span style="color:#50fa7b">Const</const>
![](asets/const.png)
</div>

</div>

---

![bg height:9in](assets/../asets/codao.webp)

# Porque <span style="color:#ff79c6;">const</span>?

## Vazamento de escopo !

---
![bg height:9in](assets/../asets/codao.webp)

# Porque <span style="color:#ff79c6;">const</span>?

## Isso não funciona

![](asets/const-fail.png)

---

![bg height:9in](assets/../asets/codao.webp)

# Porque <span style="color:#ff79c6;">const</span>?

## Mais isso sim

![](asets/const-success.png)

---

![bg height:9in](assets/../asets/codao.webp)

# Controle

* `if`
* `for`
* `forEach`
* `map`
* `reduce`
* `filter`
* ...

---

![bg height:9in](assets/../asets/codao.webp)

# <span style="color:#ff79c6;">Maluquices</span>

* Operações entre tipos distintos
* Converções automáticas
* Vazamento de escopo
  `var`, `let` e `const`

---

![bg height:9in](assets/../asets/codao.webp)

# Definindo Funções

* Long way
* Short way
* Shorter

---

![bg height:9in](assets/../asets/codao.webp)

# Funções de Outro Arquivo

* `require`
* `modules.export`

---

![bg height:9in](assets/../asets/codao.webp)

# Multiparadigma

- OO
- Script (obviamente)
- Functional aproach

---

![bg height:9in](assets/../asets/codao.webp)

# Quase OO

* Definindo uma classe
* Construtor
* Métodos
* Herança <-
* Interfaces???
  * <span style="color:#ff5555">No!</span>

---

![bg height:9in](assets/../asets/codao.webp)

# Quase Functional

* Firstclas functions
* Funções puras
* Reduzindo acoplamento
* Imutabilidade???
  * <span style="color:#ff5555">No!</span>

---

![bg height:9in](assets/../asets/codao.webp)

# Assincrono

---

![bg height:9in](assets/../asets/codao.webp)

# Dependências

> NPM node package manager

---

![bg height:9in](assets/../asets/codito.webp)

# Lets que Lets

> Vamos construir uma API




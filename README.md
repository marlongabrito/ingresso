# e-Ticket

Aplicação web simples que simula a compra de ingressos: você escolhe o tipo de ingresso, informa a quantidade e acompanha na tela quantos ingressos ainda estão disponíveis.

## Funcionalidades

- Escolha do tipo de ingresso em uma lista (Cadeira inferior, Cadeira superior e Pista)
- Escolha da quantidade de ingressos
- Validação da quantidade, com mensagem de erro quando o valor é vazio, zero ou negativo
- Bloqueio da compra quando a quantidade pedida é maior que a disponível
- Atualização automática da quantidade disponível de cada tipo de ingresso
- Limpeza do campo de quantidade após cada compra

## Tecnologias

- HTML
- CSS
- JavaScript

## Como usar

1. Clone o repositório:
```bash
   git clone https://github.com/marlongabrito/ingresso.git
```
2. Abra o arquivo `index.html` no navegador.
3. Selecione o **tipo** de ingresso e preencha o campo **Qtde.**
4. Clique em **Comprar** para concluir a compra.
5. Confira a nova quantidade em **Quantidade disponível**.

## Exemplo

| Tipo de ingresso | Disponível antes | Quantidade pedida | Resultado                                  |
|------------------|------------------|-------------------|--------------------------------------------|
| Pista            | 100              | 2                 | Pista passa a ter 98                       |
| Cadeira superior | 200              | 5                 | Cadeira superior passa a ter 195           |
| Pista            | 98               | 150               | Alerta: quantidade indisponível            |
| Cadeira inferior | 400              | 0                 | Alerta: digite um número válido            |

## Estrutura do projeto

```
ingresso/
├── index.html
├── styles/
│   ├── _reset.css
│   └── style.css
├── js/
│   └── app.js
└── assets/
    ├── Ingresso.svg
    ├── Logo-e-tricket.png
    ├── image1.png
    ├── PNG/
    │   ├── Arrow down.png
    │   ├── Grafismo verde.png
    │   ├── Imagem com borda.png
    │   ├── Imagem sem borda.png
    │   ├── Ingresso.png
    │   └── Logo e-tricket.png
    └── SVG/
        ├── Arrow down.svg
        ├── Grafismo verde.svg
        ├── Hachuras.svg
        ├── Ingresso.svg
        └── Logo e-tricket.svg
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Marlon Brito: [@marlongabrito](https://github.com/marlongabrito)

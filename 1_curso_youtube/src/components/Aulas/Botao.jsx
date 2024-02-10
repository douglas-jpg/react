export default function Botao({ btn }) {
    function evento() {
        // para pegar o evento posso colocar event ou apenas e como parametro
        // e usar event.preventDefault() para poder parar o evento por exemplo
        console.log(`O botão ${btn} foi ativado`);
    }

    return (
        <>
            <p>Clique para desparar o evento</p>
            <button onClick={evento}>Clique aqui</button>
        </>
    );
}

/* MAIS EVENTOS 
• onClick: É acionado quando um elemento é clicado

• onChange: É acionado quando o valor de um elemento de formulário é alterado

• onSubmit: É acionado quando um formulário é enviado

• onMouseOver e onMouseOut: São acionados quando o cursor do mouse entra ou sai do elemento

• onKeyDown, onKeyPress e onKeyUp: São acionados quando uma tecla do teclado é pressionada, mantida     pressionada ou liberada, respectivamente

• onFocus e onBlur: São acionados quando um elemento recebe ou perde o foco, respectivamente

• onDoubleClick: É acionado quando um elemento é clicado duas vezes consecutivas

• onContextMenu:  É acionado quando o menu de contexto do mouse é solicitado (geralmente clicando com o botão direito)

• onScroll: É acionado quando o elemento é rolado (geralmente usado em elementos de rolagem, como <div> com overflow: scroll)

• onLoad e onError (para elementos <img>):onLoad é acionado quando uma imagem é carregada com sucesso, enquanto onError é acionado se ocorrer um erro durante o carregamento

• onTouchStart, onTouchMove e onTouchEnd: Acionados quando ocorrem toques na tela, como início (touchstart), movimento (touchmove) e término (touchend)

• onCopy, onCut e onPaste: Acionados durante operações de cópia, corte e colagem em elementos editáveis

• onDragStart, onDragEnter, onDragOver, onDragLeave e onDragEnd: Acionados durante diferentes estágios de uma operação de arrastar e soltar.
*/

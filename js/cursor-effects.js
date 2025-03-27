console.log('Cursor effects script loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('初始化光标效果');
    
    // 检测是否为移动设备
    function isMobileDevice() {
        return (window.innerWidth <= 768) || 
               navigator.userAgent.match(/Android/i) ||
               navigator.userAgent.match(/webOS/i) ||
               navigator.userAgent.match(/iPhone/i) ||
               navigator.userAgent.match(/iPad/i) ||
               navigator.userAgent.match(/iPod/i) ||
               navigator.userAgent.match(/BlackBerry/i) ||
               navigator.userAgent.match(/Windows Phone/i);
    }
    
    // 如果是移动设备，不初始化鼠标特效
    if (isMobileDevice()) {
        console.log('移动设备检测到，禁用鼠标特效');
        return;
    }
    
    // 创建自定义光标
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // 基本光标移动
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function update() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(update);
    }
    update();

    // 创建泡泡效果
    function createBubble(x, y) {
        const bubble = document.createElement('div');
        bubble.className = 'cursor-bubble';
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';
        document.body.appendChild(bubble);

        // 强制重排以确保动画生效
        bubble.offsetHeight;

        bubble.classList.add('bubble-animate');
        
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // 点击事件监听
    document.addEventListener('click', (e) => {
        console.log('点击事件触发', e.clientX, e.clientY);
        createBubble(e.clientX, e.clientY);
    });

    // 悬停效果
    const hoverElements = document.querySelectorAll('a, button, input[type=\"submit\"], .clickable');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // 创建一个新的样式表
    const style = document.createElement('style');
    document.head.appendChild(style);

    // 插入泡泡动画规则
    style.sheet.insertRule(`
    @keyframes bubbleEffect {
        0% {
            transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2) rotate(45deg);
            opacity: 0;
        }
    }
    `, style.sheet.cssRules.length);
}); 
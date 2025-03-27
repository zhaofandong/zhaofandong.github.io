function generateCalendar() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const daysContainer = document.querySelector('.days');
    if (!daysContainer) return;
    
    daysContainer.innerHTML = '';
    
    // 添加空白天数
    for (let i = 0; i < startingDay; i++) {
        daysContainer.innerHTML += '<span></span>';
    }
    
    // 添加日期
    for (let i = 1; i <= daysInMonth; i++) {
        if (i === today) {
            daysContainer.innerHTML += `<span class="current">${i}</span>`;
        } else {
            daysContainer.innerHTML += `<span>${i}</span>`;
        }
    }
}

// 页面加载时生成日历
document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
    
    const calendar = document.querySelector('.floating-calendar');
    const toggle = document.querySelector('.calendar-toggle');
    const calendarContent = document.querySelector('.calendar-content');
    
    if (toggle && calendar && calendarContent) {
        // 添加日历图标
        toggle.innerHTML = '🗓';
        
        // 切换日历显示
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            calendarContent.classList.toggle('active');
            console.log('Calendar toggle clicked');
        });
        
        // 点击日历内容时阻止事件冒泡
        calendarContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // 点击其他地方时关闭日历
        document.addEventListener('click', function() {
            if (calendarContent.classList.contains('active')) {
                calendarContent.classList.remove('active');
            }
        });
        
        // 为日期添加点击事件
        const days = document.querySelectorAll('.days span');
        days.forEach(day => {
            if (day.textContent.trim() !== '') {
                day.addEventListener('click', function() {
                    console.log('Day clicked:', this.textContent);
                    // 在这里可以添加日期点击后的操作
                });
            }
        });
    }
}); 
document.addEventListener('DOMContentLoaded', function() {
    const greetButton = document.createElement('button');
    greetButton.textContent = '顯示問候語';
    document.body.appendChild(greetButton);

    greetButton.addEventListener('click', function() {
        alert('歡迎來到耀昇環保公司！');
    });
});
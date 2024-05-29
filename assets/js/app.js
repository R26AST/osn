let notifications = document.querySelector('.notifications');

function createToast(type, icon, title, text){
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="close fa-solid fa-xmark fa-lg"
                onclick="(this.parentElement).classList.add('hide'); setTimeout(() => {(this.parentElement).remove(); $('.submit').prop('disabled',false);}, 300)"
                ></i>
            </div>`;
	
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => {
		newToast.classList.add('hide');
	}, 3000);
	newToast.timeOut = setTimeout(() => {
		newToast.remove();
		$('.submit').prop('disabled',false);
	}, 3300);
}

function success(pesan){
    let type = 'success';
    let icon = 'fa-solid fa-circle-check fa-2xl';
    let title = 'Sukses';
    let text = pesan;
    createToast(type, icon, title, text);
}
function error(pesan){
    let type = 'error';
    let icon = 'fa-solid fa-circle-xmark fa-2xl';
    let title = 'Kesalahan!';
    let text = pesan;
    createToast(type, icon, title, text);
}
function warning(pesan){
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation fa-2xl';
    let title = 'Peringatan!';
    let text = pesan;
    createToast(type, icon, title, text);
}
function info(pesan){
    let type = 'info';
    let icon = 'fa-solid fa-circle-info fa-2xl';
    let title = 'Informasi';
    let text = pesan;
    createToast(type, icon, title, text);
}



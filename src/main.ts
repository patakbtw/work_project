const modalWindow = document.querySelector('.modal-window');
const modalBackdrop = document.querySelector('.modal-window__backdrop');
const form = document.querySelector('.modal-window__form');

const handleModalWindow = () => {
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', () => {
            modalWindow?.classList.remove('hidden');
        })
    })

    modalBackdrop?.addEventListener('click', () => {
        modalWindow?.classList.add('hidden');
    })
}

handleModalWindow();

const handleSubmit = () => {
    form?.addEventListener('submit', (e) => {
        e.preventDefault;
        console.log('submit success');
        modalWindow?.classList.add('hidden');
    })
}

handleSubmit();

const handleAFK = () => {
    let inactivityTimeout: number | undefined;

    const showTimeoutAlert = () => {
        window.alert("Are you still here?");
    };

    const resetInactivityTimeout = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(showTimeoutAlert, 10000);
    };

    document.addEventListener('mousemove', resetInactivityTimeout);
    document.addEventListener('keydown', resetInactivityTimeout);
    
    resetInactivityTimeout();
}

handleAFK();
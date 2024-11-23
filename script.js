document.addEventListener('DOMContentLoaded', () => {
    const cameraButton = document.getElementById('camera-button');
    const fileInput = document.getElementById('file-input');
    const preview = document.getElementById('preview');

    cameraButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});


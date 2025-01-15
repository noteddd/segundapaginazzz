
    class PasswordToggle {
        private passwordInput: HTMLInputElement | null;
        private eyeIcon: HTMLElement | null;

        constructor(passwordInputId: string, toggleButtonId: string, iconId: string) {
            this.passwordInput = document.getElementById(passwordInputId) as HTMLInputElement | null;
            this.eyeIcon = document.getElementById(iconId) as HTMLElement | null;

            const toggleButton = document.getElementById(toggleButtonId);
            if (toggleButton && this.passwordInput && this.eyeIcon) {
                toggleButton.addEventListener('click', this.togglePasswordVisibility.bind(this));
            } else {
                console.error("PasswordToggle: Alguns elementos não foram encontrados.");
            }
        }

        private togglePasswordVisibility(): void {
            if (!this.passwordInput || !this.eyeIcon) return;

            const isPassword = this.passwordInput.type === 'password';
            this.passwordInput.type = isPassword ? 'text' : 'password';
            this.updateIcon(isPassword);
        }

        private updateIcon(isPassword: boolean): void {
            if (!this.eyeIcon) return;

            if (isPassword) {
                this.eyeIcon.classList.remove('bi-eye');
                this.eyeIcon.classList.add('bi-eye-slash');
            } else {
                this.eyeIcon.classList.remove('bi-eye-slash');
                this.eyeIcon.classList.add('bi-eye');
            }
        }
    }

    new PasswordToggle('passwordInput', 'togglePassword', 'eyeIcon');

window.onload = function () {
    const inputs = document.querySelectorAll('.controls input')

    function handleUpdate() {
        // console.log(this.value)
        // console.log(this.dataset)
        const suffix = this.dataset.sizing || '';
        // if any element doesn't have s uffix then add empty string

        // console.log(suffix)
        // console.log(this.name)

        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate))
    // whenever a value changes

    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
    // wehneve mouse moves around and over it

}
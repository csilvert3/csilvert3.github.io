document.addEventListener("DOMContentLoaded", function () {
    const classList = document.getElementById("classList");
    const deleteBtn = document.getElementById("deleteBtn");


    window.addClass = function () {
        const div = document.createElement("div");
        div.className = "input-container";

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter class name...";
        input.className = "class-input";

        div.appendChild(input);
        classList.appendChild(div);

        deleteBtn.style.display = "inline-block";
    };

    window.deleteClass = function () {
        if (classList.lastChild) {
            classList.removeChild(classList.lastChild);
        }

        if (classList.children.length === 0) {
            deleteBtn.style.display = "none";
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("intro-form").addEventListener("submit", function(event) {
        const requiredFields = document.querySelectorAll("#intro-form input[required]");
        let formIsValid = true;

        requiredFields.forEach(function(field) {
            if (!field.value) {
                formIsValid = false;
                alert("Please fill in all required fields.");
            }
        });

        if (!formIsValid) {
            event.preventDefault();
        }
    });
});

window.resetForm = function() {
    const form = document.getElementById("intro-form");
    form.reset();

    const classList = document.getElementById("classList");
    while (classList.firstChild) {
        classList.removeChild(classList.firstChild);
    }

    const deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.style.display = "none";

    document.getElementById("agree-checkbox").checked = false;
};


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("intro-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const formData = {
            name: document.getElementById("name-byo").value,
            mascot: document.getElementById("mascot-byo").value,
            image: document.getElementById("image-byo").files[0],
            caption: document.getElementById("caption-byo").value,
            personalBackground: document.getElementById("personal-byo").value,
            professionalBackground: document.getElementById("professional-byo").value,
            academicBackground: document.getElementById("academic-byo").value,
            webDevBackground: document.getElementById("web-dev-byo").value,
            device: document.getElementById("device-byo").value,
            funFact: document.getElementById("fun-byo").value,
            anythingElse: document.getElementById("anything-else-byo") ? document.getElementById("anything-else-byo").value : "",
            classes: Array.from(document.querySelectorAll(".class-input")).map((input) => input.value),
            agree: document.getElementById("agree-checkbox").checked
        };

        const imageUrl = URL.createObjectURL(formData.image);
        var text = "<img src=\"" + imageUrl + "\" >";
        document.getElementById("image-byo").files[0].innerHTML = text;

        if (!formData.agree) {
            alert("You must agree to the terms before submitting.");
            return;
        }

        const mainContent = document.querySelector("main");
        mainContent.innerHTML = `
            <h1>${formData.mascot} || BYO Intro</h1>
            <header>
                <div data-include=".\components\headerNav.html"></div>
            </header>
            <main>
                <img class="intro-pic" src=${imageUrl} alt="Picture">
                <p><i>${formData.caption}</i></p>
                <ul class="intro-list">
                    <li><b>Personal Background:</b> ${formData.personalBackground}</li>
                    <li><b>Professional Background:</b> ${formData.professionalBackground}</li>
                    <li><b>Academic Background:</b> ${formData.academicBackground}</li>
                    <li><b>Primary Computer Platform:</b> ${formData.device}</li>
                    <li><b>Courses I’m Taking:</b></li>
                    <ul>
                        ${formData.classes.map((course) => `<li><b>${course}:</b></li>`).join('')}
                    </ul>
                    <li><b>Fun Fact About Me:</b> ${formData.funFact}</li>
                    <li><b>Anything Else You Would Like to Include:</b> ${formData.anythingElse}</li>
                </ul>
            </main>
            <footer>
                <div data-include=".\components\footer.html"></div>
            </footer>
        `;
    });

    window.resetForm = function() {
        const form = document.getElementById("intro-form");
        form.reset();

        const classList = document.getElementById("classList");
        while (classList.firstChild) {
            classList.removeChild(classList.firstChild);
        }

        const deleteBtn = document.getElementById("deleteBtn");
        deleteBtn.style.display = "none";

        document.getElementById("agree-checkbox").checked = false;
    };

});

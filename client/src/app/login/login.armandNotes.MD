# GPT:

    To make the login page look like the MongoDB example, where the form is on the right side, you need to adjust the CSS and HTML. Here’s how you can do it:

    Modify login.component.html
    Update the HTML to ensure it has a container for the background and the form on the right side:

    ```html
    Copy code
    <div class="login-page">
    <div class="background"></div>
    <div class="form-container">
        <mat-card class="example-card">
        <mat-card-header>
            <mat-card-title>Log in to your account</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form class="example-form">
            <mat-form-field class="example-full-width">
                <mat-label>Email Address</mat-label>
                <input matInput>
            </mat-form-field>
            <mat-form-field class="example-full-width">
                <mat-label>Password</mat-label>
                <input matInput>
            </mat-form-field>
            </form>
        </mat-card-content>
        <mat-card-actions>
            <button mat-button>Login</button>
        </mat-card-actions>
        </mat-card>
    </div>
    </div>
    ```


    Modify login.component.scss
    Add the following CSS to style the login page:

    ```scss
    Copy code
    .login-page {
    display: flex;
    height: 100vh;
    overflow: hidden;

    .background {
        flex: 1;
        background-image: url('/path/to/your/background/image.jpg');
        background-size: cover;
        background-position: center;
    }

    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        background-color: #fff; // Adjust this to match your design
    }

    .example-card {
        width: 80%; // 80% of the form container width
    }
    }
    ```
    Summary of Changes
    HTML Changes:

    Wrap the background and form in a div with the class login-page.
    Separate the background and form into their own div elements.
    SCSS Changes:

    Define .login-page to use Flexbox for layout.
    Define .background to cover the entire left side with a background image.
    Define .form-container to center the form on the right side.
    Define .example-card to set the width to 80% of the form container.
    Replace /path/to/your/background/image.jpg with the actual path to your background image.

    These changes should give you a layout similar to the MongoDB login page, with the form positioned on the right side and the background image covering the left side.


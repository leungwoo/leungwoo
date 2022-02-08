### Hi there 👋

<!DOCTYPE html>
<html lang="en">
  <h1>{{ title }}</h1>
  <h6>*All fields <strong>MUST</strong> be filled</h6>

  <form (ngSubmit)="onSubmit()" #applicationForm="ngForm">
    <div class="form-group">
      <label for="fname">First Name:</label><br />
      <input
        required
        type="text"
        id="firstname"
        [(ngModel)]="model.firstName"
        #firstName="ngModel"
        name="fname"
        placeholder="firstname"
      />

      <div *ngIf="firstName.touched && firstName.hasError('required')">
        First name is required
      </div>
    </div>

    <br />

    <div>
      <label for="lname">Last Name:</label><br />
      <input
        required
        type="text"
        id="lastname"
        [(ngModel)]="model.lastName"
        #lastName="ngModel"
        name="lname"
        placeholder="lastname"
      />
      <div *ngIf="lastName.touched && lastName.hasError('required')">
        Last name is required
      </div>
    </div>

    <br />

    <div class="form-group">
      <label type="email" id="email">Email:</label><br />
      <input
        required
        type="text"
        id="Email"
        [(ngModel)]="model.email"
        #Email="ngModel"
        name="email"
        placeholder="email"
      />
      <div *ngIf="Email.touched && Email.hasError('required')">
        Email is required
      </div>
    </div>

    <br />

    <div class="form-group">
      <label type="password" id="password">Password:</label><br />
      <input
        required
        type="text"
        id="password"
        [(ngModel)]="model.password"
        #password="ngModel"
        name="password"
        placeholder="password"
      />
      <div *ngIf="password.touched && password.hasError('required')">
        Password is required
      </div>
    </div>

    <br />

    <div class="form-group">
      <label for="birthday">Date Of Birth:</label><br />
      <input
        required
        type="date"
        id="birthday"
        [(ngModel)]="model.dateOfBirth"
        #dateOfBirth="ngModel"
        name="birthday"
      />
      <div *ngIf="dateOfBirth.touched && dateOfBirth.hasError('required')">
        Date of Birth required
      </div>
    </div>

    <br />

    <div class="form-group">
      <label for="Occupation">Occupation Status:</label><br />
      <select
        required
        [(ngModel)]="model.occupationStatus"
        #occupationStatus="ngModel"
        name="Occupation"
        id="Occupation"
      >
        <option [defaultSelected]="">...</option>
        <option value="employeed">employeed</option>
        <option value="self employeed">selfemployeed</option>
        <option value="unemployeed">unemployeed</option>
      </select>

      <div
        *ngIf="
          occupationStatus.touched && occupationStatus.hasError('required')
        "
      >
        Occupation status required
      </div>
    </div>

    <br />

    <div>
      <button
        type="submit"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        [disabled]="!applicationForm.form.valid"
      >
        Submit
      </button>
    </div>
  </form>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Application summary
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <th>
            .{{ model.firstName }}
            {{ model.lastName }}
            {{ model.email }}
            {{ model.password }}
            {{ model.dateOfBirth }}
            {{ model.occupationStatus }}
          </th>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Edit
          </button>
          <button type="button" class="btn btn-primary">Good to go!</button>
        </div>
      </div>
    </div>
  </div>
  {{
    model | json
  }}
</html>

<!--
**leungwoo/leungwoo** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

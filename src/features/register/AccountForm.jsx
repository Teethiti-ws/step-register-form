function AccountForm({ formProps }) {
  const {
    register,
    formState: { errors },
  } = formProps;

  return (
    <>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            name="username"
            id="username"
            className="input"
            placeholder="username.example"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="name@company.com"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className="input"
            placeholder="•••••••••"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      </div>
    </>
  );
}

export default AccountForm;

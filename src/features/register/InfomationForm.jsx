function InfomationForm({ formProps }) {
  const {
    register,
    formState: { errors },
  } = formProps;

  return (
    <>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstname" className="label">
            Firstname
          </label>
          <input
            {...register("firstname")}
            type="text"
            name="firstname"
            id="firstname"
            className="input"
            placeholder="Your Firstname"
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <label htmlFor="lastname" className="label">
            Lastname
          </label>
          <input
            {...register("lastname")}
            type="email"
            name="lastname"
            id="lastname"
            className="input"
            placeholder="Your Lastname"
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>
        <div>
          <label htmlFor="nickname" className="label">
            Nickname
          </label>
          <input
            {...register("nickname")}
            type="email"
            name="nickname"
            id="nickname"
            className="input"
            placeholder="Your Nickname"
          />
          {errors.nickname && <p>{errors.nickname.message}</p>}
        </div>
      </div>
    </>
  );
}

export default InfomationForm;

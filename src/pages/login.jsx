function Card({ type }) {
  return (
    <div className="card bg-base-300 rounded-box h-6/8 grid grow place-items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">{type}</legend>
        <label className="label">用户名</label>
        <input type="username" className="input" placeholder="Username" />
        <label className="label">密码</label>
        <input type="password" className="input" placeholder="Password" />
        {type === "register" && (
          <>
            <label className="label">确认密码</label>
            <input
              type="password"
              className="input"
              placeholder="Confirm Password"
            />
            <label className="label">邮箱(可选)</label>
            <input type="email" className="input" placeholder="Email" />
          </>
        )}
        <button className="btn btn-neutral mt-4">{type}</button>
      </fieldset>
    </div>
  )
}

export default function login() {
  return (
    <div className="mb-20 mt-20 flex w-full items-center justify-center">
      <Card type="register" />
      <div className="divider divider-horizontal">OR</div>
      <Card type="login" />
    </div>
  )
}

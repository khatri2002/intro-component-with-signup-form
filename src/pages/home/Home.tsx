import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames";

import { inputs } from "./data";
import { Inputs } from "./type";
import styles from "./Home.module.scss";

import IconError from "../../assets/images/icon-error.svg";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      reset();
    }, 2000);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Learn to code by watching others</h1>
          <h2>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </h2>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <span className={styles.highlight}>Try it free 7 days</span> then
              $20/mo. thereafter
            </span>
          </div>
          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              {inputs.map((input, index) => (
                <div
                  key={index}
                  className={classNames({
                    [styles.item]: true,
                    [styles.error]: errors[input.key],
                  })}
                >
                  <div className={styles.input}>
                    <input
                      type={input.type}
                      id={input.key}
                      aria-invalid={errors[input.key] ? "true" : "false"}
                      placeholder={input.placeholder}
                      {...register(input.key, input.rules)}
                    />
                    <img src={IconError} alt="icon-error" />
                  </div>
                  <span role="alert" className={styles.errorText}>
                    {errors[input.key]?.message}
                  </span>
                </div>
              ))}
              <div className={styles.footer}>
                <div className={styles.btnWrapper}>
                  <button
                    disabled={loading}
                    className={styles.btn}
                    type="submit"
                  >
                    Claim your free trial
                  </button>
                </div>
                <span className={styles.desc}>
                  By clicking the button, you are agreeing to our{" "}
                  <a href="/" className={styles.highlight}>
                    Terms and Services
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

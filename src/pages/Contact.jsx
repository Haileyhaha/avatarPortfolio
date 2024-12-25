import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import Dance from '../components/Dance';
import { OrbitControls } from '@react-three/drei';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert, hideAlert } = useAlert();
  window.scrollTo(0,0)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    setIsLoading(true)
    setCurrentAnimation('hit')
    
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Hyein Suh",
        from_email: form.email,
        to_email: 'hyeny718@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      showAlert({show:true, text:'메세지를 보내는데 성공했습니다!', type:'success'})

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({name:'', email:'', message :''})
      }, [3000]);

      setForm({name:'', email:'', message:''})
    }).catch((error) => {
      setIsLoading(false)
      setCurrentAnimation('idle')
      console.log(error)
      showAlert({show:true, text:'메세지를 보내는데 실패했습니다', type:'danger'})
    })
  };
  
  
  const handleFocus = () => {
    setCurrentAnimation('walk')    
  };
  
  const handleBlur = () => { 
    setCurrentAnimation('idle')
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}
  
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text mt-10 animate__animated animate__pulse'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-10'
              onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Your Name 🙋
            <input
              type='text'
              name='name'
              className='input'
              placeholder='이름을 입력해주세요'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Email 📧
            <input
              type='email'
              name='email'
              className='input'
              placeholder='회신받을 이메일 주소를 입력해주세요 (예: example@email.com)'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='input'
              placeholder='내용을 입력해주세요'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] mt-20'>
        <Canvas
            camera={{ position: [3, 0, 15], fov: 8 }}
            style={{
                width: '100%',
                height: '500px',
            }}
        >
            <ambientLight intensity={2.0} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.8} />
            <Dance position={[0.025, -0.9, 0]} />
            <OrbitControls />
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
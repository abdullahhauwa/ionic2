// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import {
//     IonPage,
//     IonHeader,
//     IonToolbar,
//     IonTitle,
//     IonContent,
//     IonInput,
//     IonItem,
//     IonButton,
//     IonAlert,
// } from '@ionic/react';

// const form: React.FC = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [showAlert, setShowAlert] = useState(false);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!name.trim() || !email.trim()) {
//             setShowAlert(true);
//             return;
//         }

//         alert("Form Submitted Successfully")
//         console.log('Form submitted:', { name, email });
//         // const { register, handleSubmit, formState: { errors } } = useForm();

//         // const onSubmit = (data) => {
//         //   console.log(data);
//         // Reset form
//         setName('');
//         setEmail('');
//     };

//     return (
//         <div>
//         <IonPage style={{
//             // background: "hotPink"
//         }}>
//             <IonTitle style={{ 
//                 // color: "hotPink",
//                 // textTransform: "uppercase",
//                 fontFamily: "roboto",
//                 textAlign: 'center', 
//                 marginBottom: '-80px' 
//                 }}>Input Your Details Below
//                 </IonTitle>
//             <IonContent className="ion-padding" 
//             style={{ 
//                 // display: 'flex', 
//                 // flexDirection: 'column',
//                 // background: "hotPink", 
//                 // justifyContent: 'center', 
//                 // alignContent: 'center',
//                 // textAlign: 'center', 
//                 // height: '100vh', 
//                 // margin:"auto" 
//                 }}>
//             <div style={{
//                 // marginTop: '-50px', 
//             }}>        
//             <form 
//             onSubmit={handleSubmit} 
//             style={{ 
//                 width: '30%',
//                 // background: "hotPink",
//                 justifyContent: 'center', 
//                 alignContent: 'center',
//                 textAlign: 'center',
//                 margin: 'auto',
//                 }}>
//                 <IonItem>
//                 <IonInput
//                     placeholder="Enter your name"
//                     value={name}
//                     onIonChange={(e) => setName(e.detail.value!)}
//                     required
//                     // {...register('username', { required: 'Username is required' })}
//                 />
//                 {/* {errors.username && <p>{errors.username.message}</p>} */}
//                 </IonItem>
//                 <IonItem>
//                 <IonInput
//                 style={{
//                     borderRadius: "20px"
//                 }}
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onIonChange={(e) => setEmail(e.detail.value!)}
//                     required
//                 />
//                 </IonItem>
//                 <IonButton expand="block" type="submit">
//                 Submit
//                 </IonButton>
//             </form>
//             </div>
//             <IonAlert
//                 isOpen={showAlert}
//                 onDidDismiss={() => setShowAlert(false)}
//                 header="Validation Error"
//                 message="All fields are required!"
//                 buttons={['OK']}
//             />
//             </IonContent>
//         </IonPage>
//         </div>    
//     );
// };

// export default form;

import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { 
    IonPage, 
    IonTitle, 
    IonContent, 
    IonItem, 
    IonInput, 
    IonButton, 
    IonText, 
    IonAlert 
} from '@ionic/react';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const schema = z.object({
  name: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const form: React.FC = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setShowAlert(true); // Show the alert
  };

  return (
    <IonPage>
      <IonText style={{ 
        textAlign: 'center', 
        marginTop: '100px', 
        color: 'hotPink',
        fontSize: '30px',
        fontFamily: 'roboto',
      }}>
        Input Your Details Below
      </IonText>
      <IonContent className="ion-padding">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          style={{ 
            width: '30%', 
            textAlign: 'center', 
            margin: 'auto',
            border: 'hotPink solid 2px',
            borderRadius: "10px",
            padding: "10px",
          }}
          autoComplete="off" 
        >
          {/* Name Input */}
          <IonItem>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <IonInput
                  placeholder="Enter your name"
                  onIonChange={(e) => field.onChange(e.detail.value!)}
                  value={field.value}
                  autocomplete="off" 
                />
              )}
            />
          </IonItem>
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

          {/* Email Input */}
          <IonItem>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <IonInput
                  placeholder="Enter your email"
                  onIonChange={(e) => field.onChange(e.detail.value!)}
                  value={field.value}
                  autocomplete="off" 
                />
              )}
            />
          </IonItem>
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

          {/* Password Input */}
          <IonItem>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <IonInput
                  type="password"
                  placeholder="Enter your password"
                  onIonChange={(e) => field.onChange(e.detail.value!)}
                  value={field.value}
                  autocomplete="new-password" 
                />
              )}
            />
          </IonItem>
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

          <IonButton expand="block" type="submit">Submit</IonButton>
        </form>

        {/* Alert Component */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => {
            setShowAlert(false); // Close the alert
            reset(); // Reset the form fields
          }}
          header="Form Submitted"
          message="Your form has been submitted successfully!"
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default form;


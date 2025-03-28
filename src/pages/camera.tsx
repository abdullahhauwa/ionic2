// import React from 'react'
// import Camera from '@capacitor/camera'
// import { IonButton } from '@ionic/react'

// const camera = async () => {
//     const takePicture = async () => {
//         const image = await camera.getPhoto{(
//         quality: 90,
//         allowEditing: true,
//         resultType: CameraResultType.Uri,
//         )}

//     console.log(image)

//     }
//   return (
//     <div>
//       <IonButton onClick={takePicture}>Take Picture</IonButton>
//     </div>
//   )
// }

// export default camera


import React, { useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonImg } from '@ionic/react';
import { text } from 'ionicons/icons';

const CameraComponent: React.FC = () => {
    const [photo, setPhoto] = useState<string | null>(null);

    const takePicture = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri,
            });

            setPhoto(image.webPath!); // Set image path to state
        } catch (error) {
            console.error('Camera error:', error);
        }
    };

    return (
        <div style={{
            // background: "hotPink",
            color: "black",
            padding: "10px",
            margin: "auto",
            // marginTop: "20px",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            // textAlign: "center",
            // borderRadius: "10px",
            // fontSize: "20px",
        }}>
            <IonButton onClick={takePicture}
            style={{
                background: "hotPink",
                color: "black",
                padding: "10px",
                margin: "auto",
                marginTop: "200px",
                textAlign: "center",
                justifyContent: "center",
                alignContent: "center",
                borderRadius: "10px",

            }}>Take Picture</IonButton>
            {photo && <IonImg src={photo} alt="Captured image" />}
        </div>
    );
};

export default CameraComponent;

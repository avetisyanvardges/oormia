import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {Colors} from 'assets/RootStyles';
import {normalize} from 'assets/RootStyles/normalize';

const Camera = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 28 24">
      <Path
        fill={color || Colors.oxford_blue['500']}
        d="M17.1377 0C18.4533 0.00917703 19.4897 0.692711 20.0907 1.87655C20.177 2.04544 20.2798 2.25312 20.4035 2.50829L21.2613 4.31169C21.3084 4.41104 21.4077 4.47392 21.5435 4.47426L21.8255 4.48196C24.9066 4.64299 27.3334 7.18967 27.3334 10.2838V18.1901C27.3334 21.3981 24.7293 24 21.5174 24H6.48408C3.27113 24 0.666748 21.3984 0.666748 18.1901V10.2838C0.666748 7.07465 3.27071 4.47392 6.4203 4.47596L6.52009 4.47163C6.61519 4.45943 6.69885 4.39894 6.73977 4.31256L7.39473 2.93028L7.90879 1.87789C8.51279 0.691914 9.54749 0.00917291 10.8624 0H17.1377ZM17.1307 1.99784H10.8764C10.3333 2.00163 9.96641 2.24375 9.69154 2.78348C9.61127 2.94124 9.51305 3.14044 9.39318 3.3882L8.54798 5.16627C8.21451 5.87021 7.54481 6.35444 6.7113 6.45935L6.48408 6.47182C4.3752 6.47182 2.66675 8.17814 2.66675 10.2838V18.1901C2.66675 20.295 4.3757 22.0021 6.48408 22.0021H21.5174C23.6246 22.0021 25.3334 20.2948 25.3334 18.1901V10.2838C25.3334 8.25384 23.7409 6.58269 21.7471 6.47815L21.3151 6.46289C20.5129 6.39186 19.802 5.90188 19.4531 5.1654L18.5217 3.21124L18.3082 2.78269C18.0348 2.24404 17.6672 2.00164 17.1307 1.99784ZM14.006 8.52645L14.2753 8.53359C17.0398 8.67745 19.243 10.975 19.2382 13.7746C19.2333 16.6545 16.8841 19.0028 14.0028 19.0061C11.1164 19.0077 8.76057 16.6497 8.76225 13.7717C8.739 10.9034 11.1109 8.52317 14.006 8.52645ZM14.0037 10.5243L13.7912 10.5311C12.104 10.6409 10.7485 12.0695 10.7622 13.7642C10.7612 15.5475 12.2216 17.0092 14.0011 17.0082C15.7789 17.0061 17.2352 15.5505 17.2382 13.7712C17.2413 11.9846 15.7875 10.5264 14.0037 10.5243ZM21.6061 8.3705C21.7157 8.47835 21.808 8.60851 21.8592 8.71826L21.8896 8.79609C21.9632 8.96154 22.0003 9.14142 22.0003 9.32293C22.0003 9.67153 21.8641 9.99394 21.6112 10.2623C21.3926 10.4821 21.1055 10.6173 20.7993 10.6477L20.667 10.6542L20.537 10.6477C20.4082 10.6345 20.281 10.6009 20.1385 10.5436C19.98 10.4732 19.8427 10.3838 19.7101 10.2491C19.4717 9.99584 19.3337 9.66462 19.3337 9.32293C19.3337 9.14142 19.3708 8.96154 19.4434 8.79858C19.5161 8.63348 19.6022 8.49421 19.7579 8.34272C19.8764 8.23967 19.9977 8.15675 20.1636 8.08376C20.6554 7.88907 21.2405 8.0054 21.6061 8.3705Z"
      />
    </Svg>
  );
};

export {Camera};
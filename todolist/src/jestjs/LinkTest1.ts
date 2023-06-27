// import React, { useState } from 'react';

// const STATUS = {
//   HOVERED: 'hovered',
//   NORMAL: 'normal',
// };

// interface LinkProps {
//   page?: string;
//   children: React.ReactNode;
// }

// export default function Link({ page, children }: LinkProps): JSX.Element {
//   const [status, setStatus] = useState<string>(STATUS.NORMAL);

//   const onMouseEnter = (): void => {
//     setStatus(STATUS.HOVERED);
//   };

//   const onMouseLeave = (): void => {
//     setStatus(STATUS.NORMAL);
//   };

//   return (
//     <a
//       className={status}
//       href={page || '#'}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       {children}
//     </a>
//   );
// }

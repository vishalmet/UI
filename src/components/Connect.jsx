// import React from 'react';
// import { motion } from 'framer-motion';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

// const CustomButton = () => {
//   return (
//     <ConnectButton.Custom>
//       {({
//         account,
//         chain,
//         openAccountModal,
//         openChainModal,
//         openConnectModal,
//         authenticationStatus,
//         mounted,
//       }) => {
//         const ready = mounted && authenticationStatus !== 'loading';
//         const connected =
//           ready &&
//           account &&
//           chain &&
//           (!authenticationStatus || authenticationStatus === 'authenticated');

//         return (
//           <div
//             {...(!ready && {
//               'aria-hidden': true,
//               style: {
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 userSelect: 'none',
//               },
//             })}
//           >
//             {!connected ? (
//               <motion.button
//                 className="text-white flex items-center text-xs bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:shadow-xl p-2 rounded font-medium border-b-2 border-white"
//                 onClick={openConnectModal}
//                 type="button"
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Connect Wallet
//               </motion.button>
//             ) : chain.unsupported ? (
//               <motion.button
//                 className="text-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:shadow-xl p-3 rounded text-xs font-medium border-b-2 border-white"
//                 onClick={openChainModal}
//                 type="button"
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Wrong network
//               </motion.button>
//             ) : (
//               <div style={{ display: 'flex', gap: 12 }}>
//                 <motion.button
//                   className="text-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:shadow-xl p-3 rounded text-xs font-medium border-b-2 border-white"
//                   onClick={openChainModal}
//                   style={{ display: 'flex', alignItems: 'center' }}
//                   type="button"
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {chain.hasIcon && (
//                     <div
//                       style={{
//                         background: chain.iconBackground,
//                         width: 12,
//                         height: 12,
//                         borderRadius: 999,
//                         overflow: 'hidden',
//                         marginRight: 4,
//                       }}
//                     >
//                       {chain.iconUrl && (
//                         <img
//                           alt={chain.name ?? 'Chain icon'}
//                           src={chain.iconUrl}
//                           style={{ width: 12, height: 12 }}
//                         />
//                       )}
//                     </div>
//                   )}
//                   {chain.name}
//                 </motion.button>

//                 <motion.button
//                   className="text-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:shadow-xl p-3 rounded text-xs font-medium border-b-2 border-white"
//                   onClick={openAccountModal}
//                   whileTap={{ scale: 0.9 }}
//                   type="button"
//                 >
//                   {account.displayName}
//                   {account.displayBalance ? ` (${account.displayBalance})` : ''}
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         );
//       }}
//     </ConnectButton.Custom>
//   );
// };

// export default CustomButton;

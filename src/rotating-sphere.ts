// RotatingSphere 컴포넌트 별도 export
// 이 파일을 통해 import하면 @react-three/drei, @react-three/fiber, three가 번들에 포함됩니다.
// 사용하지 않으면 메인 번들에서 완전히 제거됩니다.
export {
  RotatingSphere,
  type RotatingSphereItem,
  type RotatingSphereProps,
} from './components/rotating-sphere'

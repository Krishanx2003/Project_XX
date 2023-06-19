import Image from "next/image"
import logox from '../../../public/logox.svg'

const Brand = ({ ...props }) => (
    <Image
        src={logox}
        alt=""
        {...props}
        width={106}
        height={28}
        priority
    />
)
export default Brand;
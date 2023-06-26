import moment from "moment"

const Footer = () => {
    return (
        <div className="text-black dark:text-white text-center md:mb-2">
            <p>Copyright &#169; {moment().format('YYYY')} Developer Resources </p>
        </div>
    )
}

export default Footer
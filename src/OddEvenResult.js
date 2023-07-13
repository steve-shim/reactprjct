const OddEvenResult = ({ count, children }) => {
    console.log("children",children)
    return <>{count % 2 === 0 ? "짝수" : "홀수"}</>
}

export default OddEvenResult;
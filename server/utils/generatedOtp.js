const generatedOtp = () => {
    return Math.floor(Math.random() * 900000) + 100000  /// 1000000 to 999999
}

export default generatedOtp
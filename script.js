function telephoneCheck(str) {
    let firstPhoneRegex = /^1 \d{3}-\d{3}-\d{4}$/;
    let secondPhoneRegex = /^1 \(\d{3}\) \d{3}-\d{4}$/;
    let thirdPhoneRegex = /^\d{10}$/;
    let fourthPhoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    let fifthPhoneRegex = /^\(\d{3}\)\d{3}-\d{4}$/;
    let sixthPhoneRegex = /^1\(\d{3}\)\d{3}-\d{4}$/;
    let seventhPhoneRegex = /^1 \d{3} \d{3} \d{4}$/;
    if (firstPhoneRegex.test(str)) {
      return true;
    } else if (secondPhoneRegex.test(str)) {
      return true;
    } else if (thirdPhoneRegex.test(str)) {
      return true;
    } else if (fourthPhoneRegex.test(str)) {
      return true;
    } else if (fifthPhoneRegex.test(str)) {
      return true;
    } else if (sixthPhoneRegex.test(str)) {
      return true;
    } else if (seventhPhoneRegex.test(str)) {
    return true;
    } else {
      return false;
    }
  }
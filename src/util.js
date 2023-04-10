class util {

    static getQsVar(name) {
        let qs = window.location.search;
        if (qs && qs.length !== 0) {
            //gets rid of the leading question mark
            qs = qs.substring(1);

            let qsVars = qs.split("&");
            for (let i = 0; i < qs.length; i++) {
                let item = qsVars[i];
                let varComponents = item.split("=");
                let varName = varComponents[0];
                let varValue = varComponents[1];
                if (varName.toLowerCase() === name.toLowerCase()) {
                    return varValue;
                }
            }
        }
        return null;
    }
}
export default util;
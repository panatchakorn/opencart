//return url for homepage for a given environment
export function getBaseUrl(){
    var envi =Cypress.env('ENV'); // Get the value of environment variable from package.json
    if (envi == 'demo')
        return "http://104.42.251.168";
    //else if (envi == 'sit')
    //  return "";
};
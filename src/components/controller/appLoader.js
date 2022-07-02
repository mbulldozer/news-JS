import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1f54230d354942d988cc2b3ec4457d52',
        });
    }
}

export default AppLoader;

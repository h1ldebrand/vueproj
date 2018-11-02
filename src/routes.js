import VueRouter from 'vue-router';
import Home from './pages/Home';
// import Cars from './pages/Cars';
import Car from './pages/Car';
import CarFull from './pages/CarFull';
import ErrorCmp from './pages/Error'


const Cars = resolve => {
    require.ensure(['./pages/Cars.vue'], () => {
        resolve(
            require('./pages/Cars.vue')
        )
    })
}

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        },
        {
            path: '/car/:id',
            component: Car,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name: 'carFull',
                    beforeEnter(to, from, next){
                        console.log('beforeEnter')
                        next();

                        // if(false){
                        //     next(true)
                        // } else {
                        //     next(false)
                        // }
                    }
                }
            ]
        },
        {
            path: '/none',
            redirect: '/cars'
        },
        {
            path: '*',
            component: ErrorCmp
        }
    ],
    mode: 'history',
    scrollBehavior(to, from, savePosition){

        if(savePosition){
            return savePosition;
        }

        if(to.hash){
            return {selector: to.hash}
        }

        return {
            x: 0,
            y: 500
        }

    }
})
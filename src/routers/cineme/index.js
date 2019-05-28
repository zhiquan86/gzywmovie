export default{

    path:'/cineme',
    component:()=>import('@/views/Cineme'),
    children:[{
        path:'cilist',
        component:()=>import('@/components/CiList')
    },
    {
        path:'/cineme',
        redirect:'/cineme/cilist'

    }]
}
function Home(){
    const navegar = useNavigate();
    const [empleadoActivo, setEmpleadoActivo] = useState(null)

    useEffect(() =>{
        setEmpleadoActivo(localStorage.getItem("empleaActivo"));
        if(localStorage.getItem("empleadoActivo") === null)
        navegar("/login")
    }, [navegar, empleadoActivo])

    return(
        <div><Navegador/>Home</div>

    )
    }
export default Home
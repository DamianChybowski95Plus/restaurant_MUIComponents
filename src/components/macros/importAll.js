// Funkcja do formatowania opowiedzi na importowany kontekts.
export const importAll = (webpackWTFContext) => {
    const files = {}
    const names = webpackWTFContext.keys().map((item)=>item.replace("./","").split(".")[0])
    const paths = webpackWTFContext.keys().map(webpackWTFContext)

    names.map((item,index)=>files[item] = paths[index])

    return files
    
    // Import all musi być w osobnej linii kodu; ponieważ importy mają dziwny priorytet i czasami nie da im się przekazać argumentu
    //const images = importAll(require.context("./assets/meals",false));
}
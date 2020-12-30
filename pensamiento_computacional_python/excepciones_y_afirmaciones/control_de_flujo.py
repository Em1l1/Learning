def busca_pais(paises, pais):
    """
    Paises es un diccionario. Pais es la llave.
    Codigo con el principio EAFP.
    """

    try:
        return paises[pais]
    except KeyError:
        return None


diccioanario_Paises = {
	"Colombia"	: 1,
	"México"		: 2,
	"Argentina"	: 3
}

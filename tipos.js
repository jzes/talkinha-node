const types = []

const ptype = (data, obs) => {
    types.push({
        data: data,
        tipo: typeof(data),
        obs: obs? obs: ''
    })
}

ptype(1)
ptype(1.2, "mesmo numeros com ponto são apenas numbers")
ptype("rick")
ptype(true)
ptype({nome: "rick"})
ptype([1,2,3], "arrays sãi objects também")
ptype(ptype)
ptype(undefined, "undefined é um tipo de null")
ptype(null, "null é um object que representa null")
ptype(NaN, "NaN -> is not a number é um number também")

console.table(types)
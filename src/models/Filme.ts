import { Model , DataTypes } from "sequelize"

import { sequelize } from "../instances/mysql"

export interface FilmeInstance extends Model {
    id: number
    nomefilme: string
    anolancamento: number
    diretor: string
}

export const Filme = sequelize.define<FilmeInstance>("Filme,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nomefilme:{
        type:DataTypes.STRING
    },
    anolancamento:{
        type:DataTypes.NUMBER
    },
    diretor:{
        type:DataTypes.STRING
    }
},{
    tableName:'filmes',
    timestamps:false
})
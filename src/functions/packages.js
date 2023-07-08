const DB = process.env.DB_NAME;
const client = require('../conections/dbConnect');
const catTrans = "catalogo_transportes";
const detEnvios = "detenvios";
client.connect((err) => {
    if (err) {
        console.log('error de conexion');
    }
})
const save = (params, res) => {
    const { nombre_paquete, idTransporte } = params;
    if (nombre_paquete && idTransporte) {
        const query = `INSERT INTO ${DB}.${detEnvios} (nombre_paquete,fecha_envio,status,idTipoTransporte)
        VALUES('${nombre_paquete}',now(),'Enviado',${idTransporte});`;
        client.query(query, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json({ repuesta: 'Guardado con exito' });
            }
        });
    } else {
        res.status(400).json({ respuesta: 'La solicitud debe incluir nombre_paquete y idTransporte' });
    }
}
const updateById = (params, res) => {
    const { nombre_paquete, idTransporte, idenvio, status } = params;
    if (nombre_paquete && idTransporte && idenvio && status) {

        const query = `UPDATE ${DB}.${detEnvios} SET nombre_paquete='${nombre_paquete}',status='${status}', idTipoTransporte=${idTransporte} WHERE idEnvio=${idenvio};`;
        client.query(query, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({ repuesta: 'Actualizado con exito' });
            }
        });
    } else {
        res.status(400).json({ respuesta: 'La solicitud debe incluir nombre_paquete, idTransporte, idenvio, status' })
    }
}
const getAll = (res) => {
    const query = `SELECT de.idenvio,ct.transporte,de.nombre_paquete,de.fecha_envio,de.status
     FROM ${DB}.${detEnvios} de JOIN 
    ${DB}.${catTrans} ct ON de.idTipoTransporte=ct.idTransporte;`;
    client.query(query, (err, result) => {
        err ? res.status(500).json(err) : res.status(200).json(result);
    })
}
const getById = (params, res) => {
    const { id } = params;
    const query = `SELECT de.idenvio,ct.transporte,de.nombre_paquete,de.fecha_envio,de.status
    FROM ${DB}.${detEnvios} de JOIN 
   ${DB}.${catTrans} ct ON de.idTipoTransporte=ct.idTransporte WHERE de.idenvio=${id};`;
    client.query(query, (err, result) => {
        err ? res.status(500).json({ resultado: 'error' }) : res.status(200).json(result.length ? result : { resultado: 'Id no existe' });
    })
}
const deleteById = (params, res) => {
    const { idenvio } = params;
    if (idenvio) {
        const query = `DELETE FROM ${DB}.${detEnvios} WHERE idEnvio=${idenvio};`;
        client.query(query, (err, result) => {
            err ? res.status(500).json(err) : res.status(200).json({ respuesta: 'Eliminado con exito' });
        });
    } else {
        res.status(400).json({ respuesta: 'La solicitud necesita el ID del envio' });
    }
}
module.exports = { save, updateById, getAll, deleteById, getById }
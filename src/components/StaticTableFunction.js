import  "./Table.css";

export const Thead = () => {
  return (
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

export const Tbody = (props) => {
    // const {tbody,remove} = props
    return (
        <tbody>
      {props.tbody.map((item,index)=>{
          const {id,name,username,email,phone} = item
          return <tr key={index}>
                <td>{index+1}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td><button onClick={()=>props.remove(id)}>Delete</button></td>
          </tr>
      })}
    </tbody>
  );
};
export const Table = (props) => {
    const {data,deleteUser} = props
  return (
    <table border='1px'>
        <Thead/>
        <Tbody tbody={data} remove={deleteUser}/>
    </table>
  );
};


import React, { useState } from 'react';
import InputText from './inputText';
import Boton from './botton';
import SelectOptions from './selectOptions';

function TablaDatos() {
    // Estados para almacenar datos y controlar formularios
  const [items, setItems] = useState([]);       // Almacena la lista de elementos
  const [inputValue, setInputValue] = useState('');  // Almacena el valor del campo de entrada de texto
  const [quantity, setQuantity] = useState('');     // Almacena la cantidad del elemento
  const [itemState, setItemState] = useState('');   // Almacena el estado del elemento
  const [editingItem, setEditingItem] = useState(null);  // Almacena el elemento que se está editando
  const [nextId, setNextId] = useState(1);  // Contador para el próximo ID

  // Función para agregar un nuevo elemento a la lista
  const addItem = () => {
    if (inputValue.trim() === '' || quantity.trim() === '' || itemState.trim() === '') return; // Evitar agregar elementos vacíos
        const newItem = {
            id: nextId,         // Asignar el próximo ID
            text: inputValue,   // Nombre del elemento
            quantity: quantity, // Cantidad del elemento
            state: itemState    // Estado del elemento
        };
        setItems([...items, newItem]); // Agregar el nuevo elemento a la lista
        setInputValue('');   // Limpiar el campo de entrada de texto
        setQuantity('');     // Limpiar el campo de cantidad
        setItemState('');    // Limpiar el campo de estado
        setNextId(nextId + 1); // Incrementar el ID para el próximo elemento
  };

  // Función para actualizar un elemento existente
  const updateItem = () => {
    if (inputValue.trim() === '' || quantity.trim() === '' || itemState.trim() === '') return; // Evitar actualizar elementos con nombre vacío
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItem.id
          ? { ...item, text: inputValue, quantity: quantity, state: itemState }
          : item
      )
    );
    setInputValue('');     // Limpiar el campo de entrada de texto
    setQuantity('');       // Limpiar el campo de cantidad
    setItemState('');      // Limpiar el campo de estado
    setEditingItem(null);  // Limpiar el elemento en edición
  };

  // Función para eliminar un elemento de la lista
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Función para editar un elemento
  const editItem = (item) => {
    setEditingItem(item);   // Establecer el elemento en edición
    setInputValue(item.text); // Llenar el campo de entrada de texto con el nombre del elemento
    setQuantity(item.quantity); // Llenar el campo de cantidad
    setItemState(item.state);   // Llenar el campo de estado
  };

  // Renderizar la interfaz de usuario
  return (
    <div>
        <form class='flex flex-col items-center'>
            {/* Campos para ingresar datos del elemento */}
            <div class='flex'>
                
                <InputText nameLabel="Nombre*" typeInput="text" placeholder="Ingrese el nombre del salon" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

                <InputText nameLabel="Cantidad*" typeInput="number" numMin={1} placeholder="Ingrese la capacidad del salon" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

                <SelectOptions nameSelect='Estado*' value={itemState} onChange={(e) => setItemState(e.target.value)} nameOption1='Habilitado' nameOption2='Deshabilitado'/>
            </div>

            {/* Botón para agregar o actualizar el elemento */}
            <div>
                {editingItem ? (
                    <button onClick={updateItem}><Boton nameBoton='EDITAR'/></button>
                ) : (
                    <button onClick={addItem}><Boton nameBoton='CREAR'/></button>
                )}
            </div>

        </form>
      
      {/* Tabla para mostrar la lista de elementos */}
      <hr class="my-10 text-linecolor mx-28"/>
      <h1 class=' text-center mt-9 text-[25px]'>LISTA DE SALONES</h1>
      <div class='flex justify-center'>
        <table class='border border-collapse text-center mx-32 my-10 w-full text-[18px]'>
            <thead class="uppercase bg-resaltar border text-center">
                <tr>
                    <th class='border py-4'>ID</th>
                    <th class='border'>Nombre</th>
                    <th class='border'>Cantidad</th>
                    <th class='border'>Estado</th>
                    <th class='border'>Editar</th>
                    <th class='border'>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                <tr key={item.id}>
                    <td class='border py-2'>{item.id}</td>
                    <td class='border'>{item.text}</td>
                    <td class='border'>{item.quantity}</td>
                    <td class='border'>{item.state}</td>
                    <td class='border'>
                    <button onClick={() => editItem(item)}><i class="bi bi-pencil-square text-2xl hover:text-midnight hover:text-xl"></i></button>
                    </td>
                    <td class='border'>
                        <button onClick={() => deleteItem(item.id)}><i class="bi bi-trash text-2xl hover:text-redUnicauca hover:text-xl"></i></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaDatos; 
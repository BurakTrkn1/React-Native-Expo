import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DropdownComp = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (item) => {
        setSelectedItem(item);
        onSelect(item.value);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                <Text style={styles.buttonText}>
                    {selectedItem ? selectedItem.value : 'Seçiniz'}
                </Text>
                <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {isOpen && (
                <View style={styles.dropdownList}>
                    {options.map((item) => (
                        <TouchableOpacity
                            key={item.label}
                            style={styles.item}
                            onPress={() => handleSelect(item)}
                        >
                            <Text>{item.value}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 275,
        position: 'relative',
        zIndex: 1,
    },
    dropdownButton: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#928284',
    },
    buttonText: {
        fontSize: 16,
    },
    arrow: {
        fontSize: 12,
    },
    dropdownList: {
        position: 'absolute',
        top: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#928284',
        marginTop: 5,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
});
export default DropdownComp;
// Kullanım örneği
// const App = () => {
//     const options = [
//         { label: 'Seçenek 1', value: '1' },
//         { label: 'Seçenek 2', value: '2' },
//         { label: 'Seçenek 3', value: '3' },
//     ];

//     const handleSelect = (item) => {
//         console.log('Seçilen:', item);
//     };

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <DropdownComp options={options} onSelect={handleSelect} />
//         </View>
//     );
// };

// export default App;
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Contact() {
    // Hook de navegação
    const navigation = useNavigation();
    
    // Estados para os campos do formulário
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Estado para validação de erros
    const [errors, setErrors] = useState({});

    // Função para validar o email
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = () => {
        // Validação dos campos
        let newErrors = {};

        if (!name.trim()) newErrors.name = "Nome é obrigatório";
        if (!email.trim()) newErrors.email = "Email é obrigatório";
        else if (!validateEmail(email)) newErrors.email = "Email inválido";
        if (!subject.trim()) newErrors.subject = "Assunto é obrigatório";
        if (!message.trim()) newErrors.message = "Mensagem é obrigatória";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        Alert.alert(
            "Mensagem Enviada!",
            "Agradecemos seu contato. Retornaremos em breve!",
            [{ text: "OK", onPress: () => clearForm() }]
        );
    };

    // Função para limpar o formulário
    const clearForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <StatusBar style="dark" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                       
                        
                        <Image
                            source={require('../assets/img/logos/Logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.headerTitle}>Fale Conosco</Text>
                    <Text style={styles.headerSubtitle}>
                        Dúvidas, sugestões ou feedback? Estamos aqui para ajudar.
                    </Text>
                </View>

                {/* Formulário de Contato */}
                <View style={styles.formContainer}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nome</Text>
                        <View style={[styles.inputContainer, errors.name && styles.inputError]}>
                            <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Seu nome completo"
                                value={name}
                                onChangeText={(text) => {
                                    setName(text);
                                    if (errors.name) {
                                        const newErrors = { ...errors };
                                        delete newErrors.name;
                                        setErrors(newErrors);
                                    }
                                }}
                            />
                        </View>
                        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <View style={[styles.inputContainer, errors.email && styles.inputError]}>
                            <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="seu.email@exemplo.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text);
                                    if (errors.email) {
                                        const newErrors = { ...errors };
                                        delete newErrors.email;
                                        setErrors(newErrors);
                                    }
                                }}
                            />
                        </View>
                        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Assunto</Text>
                        <View style={[styles.inputContainer, errors.subject && styles.inputError]}>
                            <Ionicons name="create-outline" size={20} color="#666" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Assunto da mensagem"
                                value={subject}
                                onChangeText={(text) => {
                                    setSubject(text);
                                    if (errors.subject) {
                                        const newErrors = { ...errors };
                                        delete newErrors.subject;
                                        setErrors(newErrors);
                                    }
                                }}
                            />
                        </View>
                        {errors.subject && <Text style={styles.errorText}>{errors.subject}</Text>}
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Mensagem</Text>
                        <View style={[styles.messageContainer, errors.message && styles.inputError]}>
                            <TextInput
                                style={styles.messageInput}
                                placeholder="Digite sua mensagem aqui..."
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                                value={message}
                                onChangeText={(text) => {
                                    setMessage(text);
                                    if (errors.message) {
                                        const newErrors = { ...errors };
                                        delete newErrors.message;
                                        setErrors(newErrors);
                                    }
                                }}
                            />
                        </View>
                        {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.submitButtonText}>Enviar Mensagem</Text>
                        <Ionicons name="send" size={18} color="#fff" style={{ marginLeft: 8 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.otherContactsContainer}>
                    <Text style={styles.sectionTitle}>Outras formas de contato</Text>

                    <View style={styles.contactInfo}>
                        <View style={styles.contactItem}>
                            <Ionicons name="mail" size={22} color="#1A2F5A" style={styles.contactIcon} />
                            <Text style={styles.contactText}>suporte@the20brazilianstars.com</Text>
                        </View>

                        <View style={styles.contactItem}>
                            <Ionicons name="call" size={22} color="#1A2F5A" style={styles.contactIcon} />
                            <Text style={styles.contactText}>(11) 9876-5432</Text>
                        </View>

                        <View style={styles.contactItem}>
                            <Ionicons name="logo-whatsapp" size={22} color="#1A2F5A" style={styles.contactIcon} />
                            <Text style={styles.contactText}>(11) 98765-4321</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F5',
    },
    header: {
        backgroundColor: '#1A2F5A',
        padding: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        marginBottom: 10,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 0,
        padding: 5,
    },
    logo: {
        width: 70,
        height: 70,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#E0E0E0',
        textAlign: 'center',
        maxWidth: '90%',
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 6,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#F9F9F9',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 46,
        color: '#333',
    },
    messageContainer: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#F9F9F9',
    },
    messageInput: {
        height: 120,
        color: '#333',
        textAlignVertical: 'top',
    },
    inputError: {
        borderColor: '#FF6B6B',
        backgroundColor: '#FFF0F0',
    },
    errorText: {
        color: '#FF6B6B',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 2,
    },
    submitButton: {
        backgroundColor: '#1A2F5A',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    otherContactsContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A2F5A',
        marginBottom: 15,
    },
    contactInfo: {
        marginTop: 10,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    contactIcon: {
        marginRight: 12,
    },
    contactText: {
        fontSize: 14,
        color: '#333',
    },
    socialMediaContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    socialIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F0F2F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        backgroundColor: '#F0F2F5',
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    footerText: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
    }
});
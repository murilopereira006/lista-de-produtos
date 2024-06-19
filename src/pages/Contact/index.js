import { ContactContainer, Title, Description, LinksContainer, LinkItem, Icon } from './styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <ContactContainer>
            <Title>Contato</Title>
            <Description>Eu sou Murilo Pereira desenvolvedor de software com paixão por criar soluções inovadoras.</Description>

            <LinksContainer>
                <LinkItem href="https://github.com/murilopereira006" target="_blank">
                    <Icon><FaGithub /></Icon>
                    GitHub
                </LinkItem>
                <LinkItem href="https://www.linkedin.com/in/murilopereira006/" target="_blank">
                    <Icon><FaLinkedin /></Icon>
                    LinkedIn
                </LinkItem>
            </LinksContainer>
        </ContactContainer>
    );
};

export default Contact;

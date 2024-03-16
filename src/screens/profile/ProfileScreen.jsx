/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 16.03.2024
 */
import {ScrollView} from 'react-native';
import {Button, Flex, Icon, WingBlank} from "@ant-design/react-native";

// require('@ant-design/icons-react-native/fonts/antoutline.ttf')

export default function ProfileScreen() {
    return (
        <ScrollView>
            <WingBlank>
                <Flex>
                    <Flex.Item><Button>Изменить профиль</Button></Flex.Item>
                    <Flex.Item><Button>Поделиться профилем</Button></Flex.Item>
                    <Flex.Item><Button>
                        <Icon name={'login'}/>
                        {/*<Ionicons name={'menu'} size={24} style={{paddingRight: 30}}/>*/}
                    </Button>
                    </Flex.Item>
                </Flex>
            </WingBlank>
            <Button>1</Button>
            <WingBlank>
                <Button>2</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
                <Button>3</Button>
            </WingBlank>
        </ScrollView>
    );
}
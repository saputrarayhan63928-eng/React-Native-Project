import { Text, View, Button } from "react-native";

    interface Porps {
        message: string
        onRetry?: () => void
    }

    export function ErrorState({message , onRetry}: Porps){
        return(
            <View style={{ padding: 16 }}>
                <Text style={{ color: 'red', marginBottom: 8 }}>{message}</Text>
                {onRetry && <Button title="Coba Lagi" onPress={onRetry}/>}
            </View>
        )
    }
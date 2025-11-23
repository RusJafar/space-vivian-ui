

export default class TelegramApiService {
    groupId = '-1002562774865'; //TODO 
    botId = '7228698954:AAHSymyDkZ7YC1ZH0vlbgrSAfQYXVxWWBpE';

    

    sendMassageToGroup = async (message: string): Promise<Response | null> => {
        const path = `https://api.telegram.org/bot${this.botId}/sendMessage?chat_id=${this.groupId}&text=${message}`;
        let response: Response | null = null;
        try {
             response = await fetch(path);
        } catch (error) {
            console.error('Error:', error);
        }
        return response
    }
}
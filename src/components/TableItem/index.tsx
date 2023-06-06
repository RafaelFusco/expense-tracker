import { Item } from '../../types/Item'
import * as C from './styles'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
    item: Item
    onClick2: () => void
}

export const TableItem = ({ item, onClick2 }: Props) => {



    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>

            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>

            </C.TableColumn>

            <C.TableColumn>{item.title}</C.TableColumn>

            <C.TableColumn>
                <C.Value 
                    color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.Button onClick={onClick2}/>
            </C.TableColumn>
        </C.TableLine>
    )
}
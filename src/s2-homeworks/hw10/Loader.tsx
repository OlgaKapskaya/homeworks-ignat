import s from './Loader.module.css'
import spinner from './eclipse.svg'
export const Loader = () => <div className={s.loader}>
    <img src={spinner} style={{width: '90px'}}/>
</div>

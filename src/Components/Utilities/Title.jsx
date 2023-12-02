import PropTypes from 'prop-types'

const Title = ({ children }) => {
  return (
    <div className="relative border-s-8 border-[#facc4c] ps-3 font-aladin">
      <h2 className="text-4xl sm:text-5xl md:text-7xl text-[#282531] font-bold font-roboto-slab">{children}</h2>
    </div>
  );
};
Title.propTypes = {
  children: PropTypes.node
}
export default Title;
